import './NotFoundPage.css'

export default function NotFoundPage() {
    return <div className={'notFoundPage'}>
        <img className={'notFoundImage'} src={'/icons/not_found.png'} alt={'Route not found'}/>
        <div className={'is-size-2 has-text-grey-light'}>
            Page not found ... :(
        </div>
    </div>
}
