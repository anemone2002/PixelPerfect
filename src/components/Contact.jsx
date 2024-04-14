function Contact() {
    return (  
        <section className="contact" id="contacts">
        <div className="container">
            <h2>Contact Us</h2>
            <p>Have a question or need assistance? Reach out to us using the form below:</p>
            <form>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    </section>
    );
}

export default Contact
