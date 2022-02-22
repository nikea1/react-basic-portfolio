export function Contacts(){
    return(
        <section>
            <h1 className="page-title">Contact Me</h1>
            <hr />
            <form className="contact-form" action="index.html" method="post">
                <label htmlFor="name">
                    Name: 
                    <input className="text-input" type="text" name="name" placeholder="John Smith" />
                    </label>
                <br />
                
                <label htmlFor="mail">
                    E-mail: 
                    <input className="text-input" type="text" name="mail" placeholder="Jsmith@email.com" />
                </label>
                <br />
                <label htmlFor="subject">
                    Subject: 
                    <input className="text-input" type="text" name="subject" placeholder="subject" />
                </label>
                <br />
                <label>
                    Message: 
                    <textarea placeholder="Message"></textarea>
                </label>
                <button type="submit" name="submit">Submit</button>
            </form>
        </section>
    )
}