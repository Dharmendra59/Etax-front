import "./contact-map.css";

export default function MapSection() {
  return (
    <section className="map-section">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56682.31210862149!2d80.09782912251569!3d27.38681554987786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ef82517a25f8d%3A0x766ab2041faf7ced!2sHardoi%2C%20Uttar%20Pradesh%20241001!5e0!3m2!1sen!2sin!4v1738247376748!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        title="Map"
      ></iframe>
    </section>
  );
}
