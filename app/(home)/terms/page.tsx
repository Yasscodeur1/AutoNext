import React from 'react';

export default function page() {
  return (
    <div className='w-full h-80 flex flex-col items-center justify-center'>
      <h1 className='text-2xl'>Terms and Conditions</h1>
      <p className='max-w-3xl mx-auto p-4'> {/* Ajout de max-w et mx-auto */}
        By accessing and browsing the Devoteam website or by using and/or downloading any content from the same, you agree to and accept the Terms of Use as set forth below.
        The purpose of this website is to provide information about Devoteam, its structure, its services and its financial reports.
        Despite its efforts to provide reliable content through this website, Devoteam Group (‘the Company’) cannot guarantee the accuracy, precision, timeliness or exhaustiveness of information posted on the site.
        Links to third-party websites are provided for convenience only and do not imply any approval or endorsement by the Company of the linked sites.
        This website is protected by intellectual property rights and is the exclusive property of the Company.
        Any dispute or claim arising out of or related to the Terms of Use shall be governed by French law. Any legal action shall be taken in France.
      </p>
    </div>
  );
}