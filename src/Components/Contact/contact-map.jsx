import "./contact-map.css";

export default function MapSection() {
  return (
    <section className="map-section">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.36273742288!2d80.25598059173979!3d26.447303776155852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1740618551894!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        title="Map"
      ></iframe>
    </section>
  );
}
