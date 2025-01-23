import { Link } from 'react-router-dom'
import error504 from '../../assets/img/error-504.svg'



function Page504(){
    return(
        <>
        <body class="nk-body bg-white npc-default pg-error">
    <div class="nk-app-root">
        <div class="nk-main ">
            <div class="nk-wrap nk-wrap-nosidebar">
                <div class="nk-content ">
                    <div class="nk-block nk-block-middle wide-md mx-auto">
                        <div class="nk-block-content nk-error-ld text-center"><img class="nk-error-gfx"
                                src={error504} alt=""/>
                            <div class="wide-xs mx-auto">
                                <h3 class="nk-error-title">Gateway Timeout Error</h3>
                                <p class="nk-error-text">We are very sorry for inconvenience. It looks like some how our
                                    server did not receive a timely response.</p><a href="/login.html"
                                    class="btn btn-lg btn-primary mt-2">Back To Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
        </>
    )
}
export default Page504