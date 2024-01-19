import { logos } from '../assets';
const Hero = () => {
    return (
        <header
            className="w-full flex
    justify-center items-center flex-col"
        >
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img
                    src={logos}
                    alt="FA_logo"
                    className="w-24 object-contain"
                />
                <button
                    type="button"
                    onClick={() => window.open('ссылка на проект')}
                    className="black_btn"
                >
                    Github
                </button>
            </nav>

            <h1 className="head_text">
                Читай быстро с <br className="max-md:hidden" />
                <span className="orange_gradient">OpenAi GPT-4</span>
            </h1>
            <h2 className="desc">
                Упростите чтение англоязычных статей и сайтов с помощью
                искусственного интелекта, получите сокращенную информацию за 5
                секунд!
            </h2>
        </header>
    );
};

export default Hero;
