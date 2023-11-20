function Footer() {
    return (
        <article className="p-8 px-40 flex flex-col text-2xl bg-neutral-800 gap-8">
            <section className="w-full flex gap-8 justify-center">
                <a href="https://github.com/P0kay" target="_blank" rel="noreferrer"><img src="icons/github.svg" alt="github-icon" className="h-16 w-16" /></a>
                <a href="https://www.facebook.com/Koobiat" target="_blank" rel="noreferrer"><img src="icons/facebook.svg" alt="facebook-icon" className="h-16 w-16" /></a>
                <a href="https://www.linkedin.com/in/jakub-szyma%C5%84ski-aa5671253/" target="_blank" rel="noreferrer"><img src="icons/linkedin.svg" alt="linkedin-icon" className="h-16 w-16" /></a>
            </section>
                <p className="text-center text-lg text-neutral-400">
                    © 2023 Jakub Szymański
                </p>
        </article>
    );
}

export default Footer;