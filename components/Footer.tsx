import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs">
          &copy; {currentYear} GEO | STORE, Inc, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
