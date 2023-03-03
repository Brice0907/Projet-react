import './style/style.scss'

export default function Footer() {
    return <footer class="footer">
        <div class="footer_line"></div>
        <div class="footer_logo">B R</div>
        <div class="footer_line"></div>
        <div class="footer_text">© Brice Rochet | 2022</div>
        <div class="footer_bloc">
            <a href="https://www.linkedin.com/in/brice-rochet-7b767b259/" target="_blank"><i
                class="fa-brands fa-linkedin-in header_bloc_logo footer_bloc_logo"></i></a>
            <a href="https://github.com/Brice0907" target="_blank"><i
                class="fa-brands fa-square-github header_bloc_logo footer_bloc_logo"></i></a>
        </div>
    </footer>
}