import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import Countdown, { zeroPad } from "react-countdown"
import { FaHeart as HeartIcon } from "react-icons/fa"
import "./App.css"

import LOCATION from "../public/1691961613_cerenas-club-p-sarabuz-restoran-vkontakte-3.jpg"
import FOOTER from "/FOOTER.jpg"
import HEADER from "/HEADER.jpg"
import HEART from "/heart.jpg"

type RenderProps = {
	days: string | number
	hours: string | number
	minutes: string | number
	seconds: string | number
	completed: boolean
}

const renderer = ({
	days,
	hours,
	minutes,
	seconds,
	completed,
}: RenderProps) => {
	if (completed) {
		// Render a completed state
		return (
			<div className="flex justify-center gap-5 md:gap-10 lg:gap-15 text-black font-ribeye mt-5">
				<div className="flex flex-col">
					<h1 className="flex justify-center text-2xl md:text-6xl lg:text-8xl">
						{days}
					</h1>
					<h2 className="text-center lg:text-4xl">ДНЕЙ</h2>
				</div>

				<div className="flex flex-col">
					<h1 className="flex justify-center text-2xl md:text-6xl lg:text-8xl">
						{hours}
					</h1>
					<h2 className="text-center lg:text-4xl">ЧАСОВ</h2>
				</div>

				<div className="flex flex-col">
					<h1 className="flex justify-center text-2xl md:text-6xl lg:text-8xl">
						{minutes}
					</h1>
					<h2 className="text-center lg:text-4xl">МИНУТ</h2>
				</div>

				<div className="flex flex-col">
					<h2 className="flex justify-center text-2xl md:text-6xl lg:text-8xl">
						{seconds}
					</h2>
					<h4 className="text-center lg:text-4xl">СЕКУНД</h4>
				</div>
			</div>
		)
	} else {
		// Render a countdown
		return (
			<div className="flex justify-center gap-5 md:gap-10 lg:gap-15 text-black font-ribeye mt-5">
				<div className="flex flex-col">
					<h1 className="flex justify-center text-2xl md:text-6xl lg:text-8xl">
						{zeroPad(days)}
					</h1>
					<h2 className="text-center lg:text-4xl">ДНЕЙ</h2>
				</div>

				<div className="flex flex-col">
					<h1 className="flex justify-center text-2xl md:text-6xl lg:text-8xl">
						{zeroPad(hours)}
					</h1>
					<h2 className="text-center lg:text-4xl">ЧАСОВ</h2>
				</div>

				<div className="flex flex-col">
					<h1 className="flex justify-center text-2xl md:text-6xl lg:text-8xl">
						{zeroPad(minutes)}
					</h1>
					<h2 className="text-center lg:text-4xl">МИНУТ</h2>
				</div>

				<div className="flex flex-col">
					<h2 className="flex justify-center text-2xl md:text-6xl lg:text-8xl">
						{zeroPad(seconds)}
					</h2>
					<h4 className="text-center lg:text-4xl">СЕКУНД</h4>
				</div>
			</div>
		)
	}
}

function App() {
	const countDownDate = new Date("2025-12-20T14:00:00+03:00").getTime()

	return (
		<>
			<div className="grid grid-cols-2 pt-6 lg:py-8 relative bg-white xl:px-50 2xl:px-80">
				<div className="col-start-1 col-end-2 md:px-5 lg:px-15">
					<img
						src={HEADER}
						alt="Nikyah Logo"
						className="cover w-full object-fill"
					/>
				</div>
				<div className="col-start-2 relative col-end-3 text-center text-black leading-none justify-self-center">
					<h1 className="opacity-10 font-extrabold text-8xl md:text-[180px] lg:text-[200px] font-rochester">
						20
					</h1>
					<h1 className="opacity-10 font-extrabold text-8xl md:text-[180px] lg:text-[200px] font-rochester">
						12
					</h1>
					<h1 className="opacity-10 font-extrabold text-8xl md:text-[180px] lg:text-[200px] font-rochester">
						25
					</h1>
					<h1 className="absolute font-monteCarlo text-black text-[40px] md:text-[100px] lg:text-[150px] -left-1/6 top-1/6 lg:top-1/8 lg:-left-1/3">
						Иззет
					</h1>

					<h1 className="absolute top-1/3 left-1/5 font-monteCarlo text-black text-[60px] md:text-[140px] lg:text-[160px] lg:top-1/3">
						&
					</h1>

					<h1 className="absolute font-monteCarlo text-black text-[50px] md:text-[100px] lg:text-[150px] bottom-1/4 -left-1/6 lg:bottom-1/4 lg:-left-1/3">
						Реяна
					</h1>
				</div>

				<div className="col-span-2 mb-4  md:py-6">
					<Countdown date={countDownDate} renderer={renderer} />
				</div>

				<div className="col-span-2 bg-black text-slate-100 p-5 text-center font-thin md:text-2xl md:py-10 md:px-8 lg:text-3xl lg:py-15 lg:px-10">
					<h1 className="mb-4">ДОРОГИЕ ГОСТИ!</h1>
					<p>
						С огромной радостью и любовью приглашаем Вас разделить с нами
						трогательный и важный момент нашей жизни — день нашего никяха.
					</p>
				</div>

				<div className="relative col-span-2 py-6 md:py-10 px-2 place-self-center w-[320px] max-h-fit md:w-auto lg:py-15">
					<h3 className="p-2 border border-b-0  border-r-0  border-l-0 border-gray-400 text-center text-base">
						ДЕКАБРЬ
					</h3>

					<Calendar
						className="mx-auto w-full text-sm md:text-base lg:text-lg"
						selectRange={false}
						showNavigation={false}
						activeStartDate={new Date(2025, 11, 14)}
						showDoubleView={false}
						defaultActiveStartDate={new Date(2025, 11, 14)}
						nextLabel={""}
						next2Label={""}
						prev2Label={""}
						prevLabel={""}
						tileClassName={() => ""}
						tileDisabled={() => true}
					/>

					<div className="absolute right-14 bottom-[95px] md:bottom-[115px] md:right-16 lg:bottom-[140px] text-[35px] md:text-[40px] text-red-600">
						<HeartIcon className="text-red-600" />

						<span className="absolute inset-0 flex items-center justify-center text-white text-[12px] md:text-[14px] bottom-1 font-bold">
							20
						</span>
					</div>
				</div>

				<div className="col-span-2 text-white mb-6">
					<div className="flex gap-5 relative bg-black p-5 md:justify-evenly md:p-10">
						<img
							src={LOCATION}
							alt="location Logo"
							className="object-cover  w-45 md:w-80"
						/>

						<div className="flex flex-col font-thin font-greatVibes text-2xl text-center md:justify-around md:text-3xl">
							<div>
								<h1>Ресторан</h1>
								<h1 className="mb-5">Сарабуз</h1>

								<p className="mb-8">село Укромное, Студенческая ул. 1A</p>
							</div>

							<a
								href="https://yandex.com/maps/-/CLfAjJkM"
								className="p-2 border border-white font-mono text-sm md:max-w-80 md:flex md:justify-center md:mx-auto md:px-6 md:py-3 md:text-2xl"
							>
								ОТКРЫТЬ КАРТУ →
							</a>
						</div>
					</div>
				</div>

				<h1 className="col-span-2 mb-6 text-center text-3xl font-thin">
					20.12.2025
				</h1>

				<h1 className="col-span-2 mb-6 text-center text-3xl font-thin">
					14:00
				</h1>

				<div className="col-span-2 w-full">
					<img
						src={FOOTER}
						alt="footer Logo"
						className="object-cover w-full h-[350px] mb-6"
					/>
				</div>

				<h1 className="col-span-2 text-center font-monteCarlo text-2xl mb-2 md:py-2 md:px-8 lg:text-3xl">
					С нетерпением ждем Вас!
				</h1>
				<h1 className="col-span-2 mb-6 text-center font-monteCarlo text-2xl md:pb-10 md:px-8 lg:text-3xl">
					с любовью, Иззет и Реяна
				</h1>

				<img
					src={HEART}
					alt="heart"
					className="col-span-2 justify-self-center mb-6 w-10 h-10 object-top object-cover"
				/>
			</div>
		</>
	)
}

export default App
