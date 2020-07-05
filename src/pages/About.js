import React from 'react';
import Layout from '../layout/Layout';

const About = () => {
    return (
        <Layout>
            <h1 className="text-2xl">About salem</h1>
            <p className="text-justify sm:text-center md:text-right lg:text-justify xl:text-center ...">
                Salem is a city on the Thirumanimuthar River,
                in the south Indian state of Tamil Nadu. The centuries-old Sugavaneswarar Temple,
                dedicated to the Hindu deity Shiva, features colorful gopurams (towers) and gardens.
                Nearby, colonial-era Christ Church is an Indo-Saracenic landmark consecrated in 1875.
                Jamiya Masjid is a mosque believed to have been built by Tipu Sultan,
                the 18th-century ruler of the Kingdom of Mysore.
            </p>
        </Layout >
    );
}

export default About;