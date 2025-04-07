import "./index.scss"

export function toggleLoader() {
    const loader = document.getElementById('preloader')
    loader.classList.toggle('hidden')
}