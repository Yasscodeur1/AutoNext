"use client";

import React, { useState } from "react";
import { Box, TextField, useTheme, Button } from "@mui/material";

const ContactForm = ({
  isDarkMode,
}: {
  isDarkMode: boolean;
}): React.JSX.Element => {
  const theme = useTheme();
  const textColor = isDarkMode
    ? theme.palette.grey[900]
    : theme.palette.text.primary;
  const backgroundColor = isDarkMode
    ? theme.palette.grey[300]
    : theme.palette.background.default;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulaire soumis avec :", formData);
    // Ici tu peux ajouter un appel API ou autre logique
    alert("Message envoyé !");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-1/2 shadow-md">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
          backgroundColor,
          padding: 4,
          borderRadius: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <div className="h-full w-full flex flex-col items-center justify-center bg-gray-300 pb-3 shadow-md rounded-2xl">
          {["firstName", "lastName", "email", "subject", "message"].map(
            (field) => (
              <TextField
                key={field}
                required
                id={field}
                name={field}
                label={
                  field === "firstName"
                    ? "Prénom"
                    : field === "lastName"
                    ? "Nom"
                    : field === "email"
                    ? "Email"
                    : field === "subject"
                    ? "Sujet"
                    : "Message"
                }
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                variant="standard"
                multiline={field === "message"}
                rows={field === "message" ? 4 : undefined}
                InputProps={{
                  style: {
                    color: textColor,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: textColor,
                  },
                }}
              />
            )
          )}

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: theme.palette.primary.main,
              color: "#fff",
            }}
          >
            Envoyer
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default ContactForm;
