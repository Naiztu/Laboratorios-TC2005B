import React from "react";
import Layaout from "../components/Layaout";

export default function Laboratorio15() {
    return (
        <Layaout>
            <h1 className="title"> Conociendo el ambiente de MariaDB</h1>
            <p className=" w-11/12 md:w-1/2 mx-auto text-center">Se realizo la carga de las tablas a una base de datos<br /> <strong className=" uppercase">script:</strong></p>
            <div className=" mx-auto w-10/12">
                <a
                    href="https://github.com/Naiztu/Laboratorios-TC2005B/blob/master/sql/labs.sql"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full"
                        viewBox="0 0 9.252 4.626"
                    >
                        <g
                            transform="matrix(.037376 0 0 .037376 1.069994 -1.319339)"
                            className="fill-neutral"
                        >
                            <path
                                d="M8.504 128.215h5.8v-22.977l9.058 20.033c1.026 2.408 2.5 3.3 5.354 3.3s4.24-.893 5.3-3.3l9.013-20.033v22.977h5.845v-22.977c0-2.23-.893-3.303-2.767-3.883-4.417-1.338-7.362-.178-8.7 2.81l-8.878 19.81-8.567-19.81c-1.294-2.988-4.284-4.148-8.745-2.81-1.83.58-2.722 1.652-2.722 3.883l-.001 22.977zm45.198-18.694h5.845v12.627c-.044.713.223 2.32 3.4 2.363 1.65.045 12.582 0 12.67 0v-15.08h5.845v20.658c0 5.086-6.3 6.2-9.236 6.246h-18.38v-3.88h18.427c3.748-.402 3.302-2.275 3.302-2.9v-1.518h-12.36c-5.756-.045-9.46-2.588-9.503-5.488v-13.03zm125.374-14.635c-3.568-.09-6.336.268-8.656 1.25-.668.27-1.74.27-1.828 1.116.357.355.4.936.713 1.428.535.893 1.473 2.096 2.32 2.72.938.715 1.875 1.428 2.855 2.053 1.74 1.07 3.703 1.695 5.398 2.766.982.625 1.963 1.428 2.945 2.098.5.357.803.938 1.428 1.16v-.135c-.312-.4-.402-.98-.713-1.428-.447-.445-.893-.848-1.34-1.293-1.293-1.74-2.9-3.258-4.64-4.506-1.428-.982-4.55-2.32-5.13-3.97l-.088-.09c.98-.09 2.14-.447 3.078-.715 1.518-.4 2.9-.312 4.46-.713.715-.18 1.428-.402 2.143-.625v-.4c-.803-.803-1.383-1.874-2.23-2.632-2.275-1.963-4.775-3.882-7.363-5.488-1.383-.892-3.168-1.473-4.64-2.23-.537-.268-1.428-.402-1.74-.848-.805-.98-1.25-2.275-1.83-3.436-1.293-2.454-2.543-5.175-3.658-7.763-.803-1.74-1.295-3.48-2.275-5.086-4.596-7.585-9.594-12.18-17.268-16.687-1.65-.937-3.613-1.34-5.7-1.83l-3.346-.18c-.715-.312-1.428-1.16-2.053-1.562-2.543-1.606-9.102-5.086-10.977-.49-1.205 2.9 1.785 5.755 2.8 7.228.76 1.026 1.74 2.186 2.277 3.346.3.758.4 1.562.713 2.365.713 1.963 1.383 4.15 2.32 5.98.5.937 1.025 1.92 1.65 2.767.357.49.982.714 1.115 1.517-.625.893-.668 2.23-1.025 3.347-1.607 5.042-.982 11.288 1.293 14.99.715 1.115 2.4 3.57 4.686 2.632 2.008-.803 1.56-3.346 2.14-5.577.135-.535.045-.892.312-1.25v.09l1.83 3.703c1.383 2.186 3.793 4.462 5.8 5.98 1.07.803 1.918 2.187 3.256 2.677v-.135h-.088c-.268-.4-.67-.58-1.027-.892-.803-.803-1.695-1.785-2.32-2.677-1.873-2.498-3.523-5.265-4.996-8.12-.715-1.383-1.34-2.9-1.918-4.283-.27-.536-.27-1.34-.715-1.606-.67.98-1.65 1.83-2.143 3.034-.848 1.918-.936 4.283-1.248 6.737-.18.045-.1 0-.18.09-1.426-.356-1.918-1.83-2.453-3.078-1.338-3.168-1.562-8.254-.402-11.913.312-.937 1.652-3.882 1.117-4.774-.27-.848-1.16-1.338-1.652-2.008-.58-.848-1.203-1.918-1.605-2.855-1.07-2.5-1.605-5.265-2.766-7.764-.537-1.16-1.473-2.365-2.232-3.435-.848-1.205-1.783-2.053-2.453-3.48-.223-.49-.535-1.294-.178-1.83.088-.357.268-.49.623-.58.58-.49 2.232.134 2.812.4 1.65.67 3.033 1.294 4.416 2.23.625.446 1.295 1.294 2.098 1.518h.938c1.428.312 3.033.09 4.37.49 2.365.76 4.506 1.874 6.426 3.08 5.844 3.703 10.664 8.968 13.92 15.26.535 1.026.758 1.963 1.25 3.034.938 2.187 2.098 4.417 3.033 6.56.938 2.097 1.83 4.24 3.168 5.98.67.937 3.346 1.427 4.55 1.918.893.4 2.275.76 3.08 1.25 1.516.937 3.033 2.008 4.46 3.034.713.534 2.945 1.65 3.078 2.54zm-45.5-38.772a7.09 7.09 0 0 0-1.828.223v.09h.088c.357.714.982 1.205 1.428 1.83l1.027 2.142.088-.09c.625-.446.938-1.16.938-2.23-.268-.312-.312-.625-.535-.937-.268-.446-.848-.67-1.206-1.026z"
                                className="fill-neutral"
                            />
                            <path
                                d="M85.916 128.215h16.776c1.963 0 3.838-.4 5.354-1.115 2.543-1.16 3.748-2.72 3.748-4.773v-4.283c0-1.65-1.383-3.213-4.148-4.283-1.428-.535-3.213-.848-4.953-.848h-7.05c-2.365 0-3.48-.715-3.793-2.275-.044-.178-.044-.357-.044-.535v-2.633c0-.135 0-.312.044-.49.312-1.205.937-1.518 3-1.74h17.177v-3.883h-16.33c-2.365 0-3.614.135-4.73.492-3.436 1.07-4.953 2.766-4.953 5.754v3.393c0 2.63 2.945 4.863 7.942 5.398.535.045 1.115.045 1.695.045h6.024c.223 0 .445 0 .623.045 1.83.178 2.633.49 3.168 1.158.357.357.447.67.447 1.072v3.39c0 .4-.268.938-.803 1.383s-1.385.758-2.5.803c-.223 0-.355.045-.58.045H85.916zm62.195-6.736c0 3.97 3 6.2 8.97 6.648.58.045 1.115.088 1.695.088h15.17v-3.88h-15.303c-3.393 0-4.686-.848-4.686-2.9v-20.078H148.1v20.123zm-32.615.177v-13.83c0-3.525 2.498-5.668 7.363-6.336.535-.045 1.07-.09 1.56-.09h11.064c.58 0 1.072.045 1.652.09 4.863.668 7.316 2.81 7.316 6.336v13.83c0 2.855-1.025 4.373-3.436 5.4l5.71 5.174h-6.736l-4.64-4.193-4.686.268h-6.246a13.66 13.66 0 0 1-3.391-.445c-3.7-1.028-5.53-2.99-5.53-6.204zm6.29-.31c0 .178.1.355.135.58.312 1.605 1.828 2.498 4.148 2.498h5.266l-4.818-4.373h6.736l4.238 3.838c.805-.447 1.295-1.072 1.473-1.875.045-.178.045-.4.045-.58v-13.252c0-.178 0-.355-.045-.535-.312-1.516-1.828-2.363-4.104-2.363h-8.79c-2.588 0-4.283 1.115-4.283 2.898z"
                                className="fill-neutral"
                            />
                        </g>
                    </svg>
                </a>
            </div>
        </Layaout>
    );
}
