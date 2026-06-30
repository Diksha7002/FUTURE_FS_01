import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Get In Touch</h2>

      <p>
        Have an opportunity or want to connect?
        Feel free to send me a message.
      </p>

      <form>

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows="6"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;