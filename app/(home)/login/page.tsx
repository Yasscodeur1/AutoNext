"use client";

import { useState, useEffect } from "react";

export default function AuthForm() {
    const [isSignup, setIsSignup] = useState(true);
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

    // Charger les données du localStorage lors du montage du composant
    useEffect(() => {
        const savedData = localStorage.getItem("authForm");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    // Sauvegarder les données dans le localStorage à chaque modification
    useEffect(() => {
        localStorage.setItem("authForm", JSON.stringify(formData));
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let errors: { [key: string]: string } = {};

        if (!validateEmail(formData.email)) {
            errors.email = "Adresse email invalide.";
        }

        if (!validatePassword(formData.password)) {
            errors.password = "Le mot de passe doit contenir au moins 6 caractères, dont une majuscule, une minuscule et un chiffre.";
        }

        if (Object.keys(errors).length === 0) {
            console.log(isSignup ? "Inscription :" : "Connexion :", formData);

            if (!isSignup) {
                setMessage("Vous êtes connecté(e) !");
            } else {
                setMessage("Inscription réussie !");
            }

            // Réinitialiser le formulaire et le localStorage après soumission
            setFormData({
                nom: "",
                prenom: "",
                email: "",
                password: "",
            });
            localStorage.removeItem("authForm");
            setFormErrors({});
        } else {
            setFormErrors(errors);
            setMessage(""); // Ne pas afficher de message de succès en cas d'erreur
        }
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password: string) => {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return re.test(password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black dark:text-white">
            <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md dark:bg-gray-800 dark:shadow-gray-700">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
                    {isSignup ? "Inscription" : "Connexion"}
                </h2>

                {message && (
                    <div className="mb-4 text-green-500 text-center">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-600">Nom :</label>
                                <input
                                    type="text"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {formErrors.nom && <p className="text-red-500">{formErrors.nom}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-600">Prénom :</label>
                                <input
                                    type="text"
                                    name="prenom"
                                    value={formData.prenom}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {formErrors.prenom && <p className="text-red-500">{formErrors.prenom}</p>}
                            </div>
                        </>
                    )}

                    <div className="mb-4">
                        <label className="block text-gray-600">Email :</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600">Mot de passe :</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        {isSignup ? "S'inscrire" : "Se connecter"}
                    </button>
                </form>

                <p className="text-center mt-4 text-gray-600">
                    {isSignup ? "Déjà un compte ?" : "Pas encore de compte ?"}
                    <button
                        onClick={() => {
                            setIsSignup(!isSignup);
                            setMessage("");
                        }}
                        className="text-blue-500 hover:underline ml-1"
                    >
                        {isSignup ? "Se connecter" : "S'inscrire"}
                    </button>
                </p>
            </div>
        </div>
    );
}
