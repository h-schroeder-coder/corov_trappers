import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      This site was designed and developed by{" "}
      <a
        href="https://www.shecodes.io/graduates/157590-hannah-schroeder"
        target="_blank"
        className="HannahSheCodesProfileLink"
        rel="noreferrer"
      >
        Hannah Schroeder
      </a>
      , is open sourced on{" "}
      <a
        href="https://github.com/h-schroeder-coder/corov_trappers"
        target="_blank"
        className="GithubLink"
        rel="noreferrer"
      >
        GitHub
      </a>
      , and hosted on{" "}
      <a
        href="https://corov-trappers.netlify.app/"
        target="_blank"
        className="NetlifyLink"
        rel="noreferrer"
      >
        Netlify
      </a>
    </footer>
  );
}
