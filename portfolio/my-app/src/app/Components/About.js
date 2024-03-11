import React from 'react';

const About = () => {
    return (
        <section className="text-gray-600 body-font" id='about'>
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1535551951406-a19828b0a76b?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                           
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Sebastian Rodriguez</h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4"> Estudie analisis y desarrollo web, durante mi formación además del conocimiento previo, he adquirido habilidades de trabajo en equipo y liderazgo. Siendo el líder del grupo de proyecto. Mi meta es seguir aprendiendo y desarrollándome en el área de la programación.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
