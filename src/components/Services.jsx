function Services() {
    const services = [
        {
          title: 'Web Design',
          description: 'We create stunning and responsive websites tailored to your needs.',
        },
        {
          title: 'Digital Marketing',
          description: 'Boost your online presence with our strategic digital marketing solutions.',
        },
        {
          title: 'Graphic Design',
          description: 'From logos to branding, we craft visually appealing designs that leave a lasting impression.',
        },
       
      ];
    return (
        <services>
            <h2>Our Services</h2>
            <div className="service-list">
                {services.map((service, index) => (
                <div key={index} className="service">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div> ))}
           </div>
        </services>
      );
}

export default Services;