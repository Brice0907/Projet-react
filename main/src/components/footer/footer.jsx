import './style/style.scss'

export default function Footer() {
    return <footer className="footer">
        <div className="footer_line"></div>
        <div className="footer_logo">B R</div>
        <div className="footer_line"></div>
        <div className="footer_text">© Brice Rochet | 2022</div>
        <div className="footer_bloc">
            <a href="https://www.linkedin.com/in/brice-rochet-7b767b259/" target="_blank"><i
                className="fa-brands fa-linkedin-in header_bloc_logo footer_bloc_logo"></i></a>
            <a href="https://github.com/Brice0907" target="_blank"><i
                className="fa-brands fa-square-github header_bloc_logo footer_bloc_logo"></i></a>
        </div>
    </footer>
}