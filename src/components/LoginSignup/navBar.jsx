import { Component} from "react";
import "./navBarStyles.css"
class navBar extends Component {
    state={clicked : false};
    handleClicked = () =>{
        this.setState({clicked : !this.state.clicked})
    }

    render(){
    return(
        <>
        <nav>
            <a>
                <img className="logo" src="../Assets/logo.svg" alt="" />
                {/* <img src={require('../logo1.jpeg')} alt='logo' className='logo' />
                <svg id="logo-17" width="127" height="39" viewBox="0 0 127 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 2C17.2019 2 14.9262 2.4527 12.803 3.3321C10.6798 4.2116 8.7507 5.5006 7.1256 7.1256C5.5006 8.7507 4.2116 10.6798 3.3321 12.803C2.4527 14.9262 2 17.2019 2 19.5C2 21.7981 2.4527 24.0738 3.3321 26.197C4.2116 28.3202 5.5006 30.2493 7.1256 31.8744C8.7507 33.4994 10.6798 34.7884 12.803 35.6679C14.9262 36.5473 17.2019 37 19.5 37V28.25C18.3509 28.25 17.2131 28.0237 16.1515 27.5839C15.0899 27.1442 14.1253 26.4997 13.3128 25.6872C12.5003 24.8747 11.8558 23.9101 11.4161 22.8485C10.9763 21.7869 10.75 20.6491 10.75 19.5C10.75 18.3509 10.9763 17.2131 11.4161 16.1515C11.8558 15.0899 12.5003 14.1253 13.3128 13.3128C14.1253 12.5003 15.0899 11.8558 16.1515 11.4161C17.2131 10.9763 18.3509 10.75 19.5 10.75V2Z" class="ccustom" fill="#0F52FF"></path> <path d="M19.5001 25.3333C22.7218 25.3333 25.3334 22.7217 25.3334 19.5C25.3334 16.2783 22.7218 13.6667 19.5001 13.6667C16.2784 13.6667 13.6668 16.2783 13.6668 19.5C13.6668 22.7217 16.2784 25.3333 19.5001 25.3333Z" class="ccustom" fill="#0F52FF"></path> <path d="M2 19.5C2 21.7981 2.4527 24.0738 3.3321 26.197C4.2116 28.3202 5.5006 30.2493 7.1256 31.8744C8.7507 33.4994 10.6798 34.7884 12.803 35.6679C14.9262 36.5473 17.2019 37 19.5 37C21.7981 37 24.0738 36.5473 26.197 35.6679C28.3202 34.7884 30.2493 33.4994 31.8744 31.8744C33.4994 30.2493 34.7884 28.3202 35.6679 26.197C36.5473 24.0738 37 21.7981 37 19.5H28.25C28.25 20.6491 28.0237 21.7869 27.5839 22.8485C27.1442 23.9101 26.4997 24.8747 25.6872 25.6872C24.8747 26.4997 23.9101 27.1442 22.8485 27.5839C21.7869 28.0237 20.6491 28.25 19.5 28.25C18.3509 28.25 17.2131 28.0237 16.1515 27.5839C15.0899 27.1442 14.1253 26.4997 13.3128 25.6872C12.5003 24.8747 11.8558 23.9101 11.4161 22.8485C10.9763 21.7869 10.75 20.6491 10.75 19.5H2Z" class="ccompli1" fill="#5BD0F4"></path> <path d="M25.3334 19.5C25.3334 17.9529 24.7188 16.4692 23.6249 15.3752C22.5309 14.2812 21.0472 13.6666 19.5001 13.6666C17.953 13.6666 16.4693 14.2812 15.3753 15.3752C14.2813 16.4692 13.6667 17.9529 13.6667 19.5H19.5001H25.3334Z" class="ccompli1" fill="#5BD0F4"></path> <path d="M46.1396 12.925H43.9661V25H46.1396V12.925Z" class="ccustom" fill="#0F52FF"></path> <path d="M47.5589 20.722C47.5589 23.5165 49.4909 25.2415 52.0439 25.2415C54.5969 25.2415 56.5289 23.5165 56.5289 20.722C56.5289 17.9275 54.5969 16.2025 52.0439 16.2025C49.4909 16.2025 47.5589 17.9275 47.5589 20.722ZM49.7324 20.722C49.7324 19.066 50.6984 18.1 52.0439 18.1C53.3894 18.1 54.3554 19.066 54.3554 20.722C54.3554 22.378 53.3894 23.344 52.0439 23.344C50.6984 23.344 49.7324 22.378 49.7324 20.722Z" class="ccustom" fill="#0F52FF"></path> <path d="M64.296 16.444V17.5997H64.1235C63.606 16.858 62.778 16.2025 61.2945 16.2025C59.259 16.2025 57.4305 17.9275 57.4305 20.584C57.4305 23.2405 59.259 24.9655 61.2945 24.9655C62.778 24.9655 63.606 24.2927 64.089 23.62H64.2615V24.448C64.2615 26.104 63.2955 26.863 61.881 26.863C60.4665 26.863 59.742 26.104 59.4487 25.1207L57.4995 25.966C57.948 27.2597 59.259 28.6915 61.9155 28.6915C64.641 28.6915 66.435 27.2597 66.435 24.4997V16.444H64.296ZM61.95 23.1025C60.6045 23.1025 59.604 22.1365 59.604 20.584C59.604 19.0315 60.6045 18.0655 61.95 18.0655C63.2955 18.0655 64.296 19.0315 64.296 20.584C64.296 22.1365 63.2955 23.1025 61.95 23.1025Z" class="ccustom" fill="#0F52FF"></path> <path d="M67.8411 20.722C67.8411 23.5165 69.7731 25.2415 72.3261 25.2415C74.8791 25.2415 76.811 23.5165 76.811 20.722C76.811 17.9275 74.8791 16.2025 72.3261 16.2025C69.7731 16.2025 67.8411 17.9275 67.8411 20.722ZM70.0146 20.722C70.0146 19.066 70.9806 18.1 72.3261 18.1C73.6716 18.1 74.6376 19.066 74.6376 20.722C74.6376 22.378 73.6716 23.344 72.3261 23.344C70.9806 23.344 70.0146 22.378 70.0146 20.722Z" class="ccustom" fill="#0F52FF"></path> <path d="M78.517 13.96C78.517 14.8398 79.19 15.4435 80.053 15.4435C80.915 15.4435 81.588 14.8398 81.588 13.96C81.588 13.0803 80.915 12.4765 80.053 12.4765C79.19 12.4765 78.517 13.0803 78.517 13.96ZM81.139 16.444H78.966V25H81.139V16.444Z" class="ccompli1" fill="#5BD0F4"></path> <path d="M83.076 28.45H85.25V23.896H85.422C85.905 24.586 86.733 25.2415 88.217 25.2415C90.252 25.2415 92.081 23.5165 92.081 20.722C92.081 17.9275 90.252 16.2025 88.217 16.2025C86.733 16.2025 85.905 16.858 85.388 17.5998H85.215V16.444H83.076V28.45ZM87.561 23.3785C86.216 23.3785 85.215 22.4125 85.215 20.722C85.215 19.0315 86.216 18.0655 87.561 18.0655C88.907 18.0655 89.907 19.0315 89.907 20.722C89.907 22.4125 88.907 23.3785 87.561 23.3785Z" class="ccompli1" fill="#5BD0F4"></path> <path d="M93.349 18.8418C93.349 20.5323 94.763 21.1533 96.557 21.4983L97.006 21.5845C98.075 21.7915 98.558 22.0503 98.558 22.6023C98.558 23.1543 98.075 23.5855 97.075 23.5855C96.074 23.5855 95.264 23.1715 95.039 21.9295L93.038 22.447C93.332 24.241 94.832 25.2415 97.075 25.2415C99.248 25.2415 100.663 24.2238 100.663 22.4298C100.663 20.6357 99.214 20.1528 97.282 19.7733L96.833 19.687C95.936 19.5145 95.453 19.273 95.453 18.7038C95.453 18.1863 95.902 17.8585 96.73 17.8585C97.558 17.8585 98.144 18.2035 98.351 19.135L100.318 18.5313C99.904 17.1513 98.645 16.2025 96.73 16.2025C94.694 16.2025 93.349 17.1513 93.349 18.8418Z" class="ccompli1" fill="#5BD0F4"></path> <path d="M110.426 25V16.444H108.253V20.86C108.253 22.447 107.477 23.3785 106.148 23.3785C104.975 23.3785 104.32 22.7403 104.32 21.4465V16.444H102.146V21.55C102.146 23.6718 103.475 25.138 105.476 25.138C107.045 25.138 107.77 24.448 108.115 23.7235H108.287V25H110.426Z" class="ccompli1" fill="#5BD0F4"></path> <path d="M112.354 16.444V25H114.528V19.894C114.528 18.721 115.08 18.0655 116.08 18.0655C116.943 18.0655 117.46 18.5485 117.46 19.48V25H119.634V19.894C119.634 18.721 120.186 18.0655 121.186 18.0655C122.049 18.0655 122.566 18.5485 122.566 19.48V25H124.74V19.3765C124.74 17.3065 123.463 16.306 121.876 16.306C120.479 16.306 119.841 16.927 119.427 17.6515H119.254C118.857 16.8408 118.15 16.306 116.908 16.306C115.666 16.306 114.993 16.858 114.666 17.5135H114.493V16.444H112.354Z" class="ccompli1" fill="#5BD0F4"></path> 
                </svg> */}
            </a>
            <div>
                <ul id="navBar" className={this.state.clicked ? "#navBar active" : "#navBar" }>
                    <li><a href='/' className="active">Home</a></li>
                    <li><a href='index.html'>Technology</a></li>
                    <li><a href='index.html'>How to use it?</a></li>
                    <li><a href='index.html'>About us</a></li>
                    <li><a href="login"><img src={require("../Assets/person.png") } alt="" /></a></li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handleClicked}>
                <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
        </>
    )
    }

    }    
    export default navBar ;