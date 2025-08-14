
const Services = () => {
  return (
    
    <div className="services-section">
      <div><h1>Best Global Logistics Solutions.</h1></div>
      <div className="service-box">
        <img src={services1} alt="Air Freight" className="service-img" />
        <div className="service-content">
          <h3>Air Freight Services</h3>
          <p>
            Fast, reliable air cargo solutions connecting global destinations. 
            We ensure timely delivery with real-time tracking and secure handling.
          </p>
          <p className='read-more'>Read More <FaArrowRight /></p>
        </div>
      </div>

      <div className="service-box">
        <img src={services2} alt="Drone Services" className="service-img" />
        <div className="service-content">
          <h3>Drone Services</h3>
          <p>
            Cutting-edge drone delivery for lightweight, urgent shipments. 
            Ideal for last-mile logistics with speed and precision in hard-to-reach areas.
          </p>
          <p className='read-more'>Read More <FaArrowRight /></p>
        </div>
      </div>

    </div>
  );
};

export default Services;
