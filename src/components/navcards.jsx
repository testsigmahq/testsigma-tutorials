import React from "react";
import * as url from "url";

import "./navcards.scss"

const data = [
    {
        id: 1,
        title: "Getting Started",
        description: "Learn how to create and execute tests for a sample application using Testsigma.",
        path: "/tutorials/getting-started/automate-web-applications/",
    },
    {
        id: 2,
        title: "Test Cases",
        description: "Create test cases for Web apps and Mobile apps.",
        path: "/tutorials/test-cases/web-apps/build-tests-using-recorder/",
    },
    {
        id: 3,
        title: "REST API",
        description: "Learn about JSONPath and Contract Testing in Testsigma using REST APIs. ",
        path: "/tutorials/rest-api-testing/json-schema-validation/",
    },
    {
        id: 4,
        title: "Test Plans",
        description: "Create Test Plans and perform cross-platform end-to-end testing with Testsigma.",
        path: "/tutorials/test-plans/using-local-devices/",
    },
    {
        id: 5,
        title: "Testsigma Agent",
        description: "Setup Testsigma Agent to run tests in local devices.",
        path: "/tutorials/agent/how-to-setup-agents-to-run-tests-on-local-mobile-devices/",
    },
    {
        id: 6,
        title: "Advanced",
        description: "Enable two factor SMS and Email based authentication via OTPs.",
        path: "/tutorials/advanced/sms-based-two-factor-authentication-2fa/",
    },
    {
        id: 7,
        title: "Addons",
        description: "Learn how to create addons for different scenarios.",
        path: "/tutorials/addons/how-create-addons-actions/",
    },
];

const Card = ({ title, description, path }) => {
    return (
        <a href={path} className="card md:w-5/12 p-7 cursor-pointer justify-between flex mr-2 mb-2 w-full ">
            <div className="w-fit">
                <h2 className="card_heading">{title}</h2>
                <p className="card_desc">{description}</p>
            </div>
            <div className="w-fit content-center grid">
                <a className="block p-4 right-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.246093 6.98633C0.246093 6.75904 0.334979 6.54106 0.493195 6.38035C0.651411 6.21963 0.865998 6.12934 1.08975 6.12934L11.8643 6.12934L8.24169 2.45115C8.16325 2.37147 8.10103 2.27688 8.05857 2.17277C8.01612 2.06866 7.99427 1.95708 7.99427 1.8444C7.99427 1.73172 8.01612 1.62013 8.05857 1.51603C8.10103 1.41192 8.16325 1.31733 8.24169 1.23765C8.32013 1.15797 8.41325 1.09477 8.51573 1.05164C8.61822 1.00852 8.72806 0.986329 8.83899 0.986329C8.94992 0.986329 9.05977 1.00852 9.16226 1.05164C9.26474 1.09477 9.35786 1.15797 9.4363 1.23765L14.4982 6.37958C14.5768 6.45919 14.6391 6.55376 14.6817 6.65787C14.7242 6.76199 14.7461 6.8736 14.7461 6.98633C14.7461 7.09905 14.7242 7.21067 14.6817 7.31478C14.6391 7.4189 14.5768 7.51347 14.4982 7.59308L9.4363 12.735C9.35786 12.8147 9.26474 12.8779 9.16226 12.921C9.05977 12.9641 8.94993 12.9863 8.83899 12.9863C8.72806 12.9863 8.61822 12.9641 8.51573 12.921C8.41325 12.8779 8.32013 12.8147 8.24169 12.735C8.08327 12.5741 7.99427 12.3558 7.99427 12.1283C7.99427 12.0156 8.01612 11.904 8.05857 11.7999C8.10103 11.6958 8.16325 11.6012 8.24169 11.5215L11.8643 7.84332L1.08975 7.84332C0.865998 7.84332 0.651411 7.75303 0.493195 7.59231C0.334979 7.43159 0.246093 7.21362 0.246093 6.98633Z" fill="#000000"/>
                    </svg>
                </a>
            </div>
        </a>
    );
};

const CardList = () => {
    return (
        <div className="w-full flex flex-wrap">
            {data.map((item) => (
                <Card key={item.id} title={item.title} description={item.description} path={item.path}/>
            ))}
        </div>
    );
};

export default CardList;
