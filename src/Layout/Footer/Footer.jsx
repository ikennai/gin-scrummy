import React from "react";

// Styles
import './Footer.scss';

const currentYear = new Date().getFullYear();

export const Footer = (props) => (
    <footer className="footer">
        Copyright &copy; { currentYear }
    </footer>
);


