function Footer() {
    return (
        <article className="h-64 p-8 px-40 flex text-2xl bg-neutral-800">
            <section className="h-full w-full flex flex-col gap-4 justify-center">
                <a href="https://github.com/P0kay" target="_blank"><img src="icons/github.svg" alt="github-icon" className="h-16 w-16" /></a>
                <a href="https://www.facebook.com/Koobiat" target="_blank"><img src="icons/facebook.svg" alt="facebook-icon" className="h-16 w-16" /></a>
                <a href="https://www.linkedin.com/in/jakub-szyma%C5%84ski-aa5671253/" target="_blank"><img src="icons/linkedin.svg" alt="linkedin-icon" className="h-16 w-16" /></a>
            </section>
        </article>
    );
}

export default Footer;