import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import Countdown, { zeroPad } from "react-countdown"
import { FaHeart as HeartIcon } from "react-icons/fa"
import "./App.css"

import FOOTER from "/public/FOOTER.jpg"
import HEADER from "/public/HEADER.jpg"
import LOCATION from "/public/Location.jpg"

type RenderProps = {
	days: string | number
	hours: string | number
	minutes: string | number
	seconds: string | number
	completed: boolean
}

const Completionist = () => <span>You are good to go!</span>

const renderer = ({
	days,
	hours,
	minutes,
	seconds,
	completed,
}: RenderProps) => {
	if (completed) {
		// Render a completed state
		return <Completionist />
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
	const countDownDate = new Date("2025-12-14T14:00:00+03:00").getTime()

	return (
		<>
			<div className="grid grid-cols-2 pt-6 lg:py-8 relative bg-white">
				<div className="col-start-1 col-end-2 md:px-5 lg:px-15">
					<img
						src={HEADER}
						alt="Nikyah Logo"
						className="cover w-full object-fill"
					/>
				</div>
				<div className="col-start-2 relative col-end-3 text-center text-black leading-none justify-self-center">
					<h1 className="opacity-10 font-extrabold text-8xl md:text-[180px] lg:text-[200px] font-rochester">
						14
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
						трогательный и важный момент нашей жизни — день нашего нишана.
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
						activeStartDate={new Date(2025, 11, 1)}
						showDoubleView={false}
						nextLabel={""}
						next2Label={""}
						prev2Label={""}
						prevLabel={""}
						onChange={() => {}}
						tileClassName={() => ""}
					/>

					<div className="absolute bottom-[136px] md:bottom-[150px] lg:bottom-[180px] right-[12px] text-[40px] text-red-600">
						<HeartIcon className="text-red-600" />

						<span className="absolute inset-0 flex items-center justify-center text-white text-[14px] bottom-1 font-bold">
							14
						</span>
					</div>
				</div>

				<div className="col-span-2 text-white">
					<div className="flex gap-5 relative bg-black mb-5 p-5">
						<img
							src={LOCATION}
							alt="location Logo"
							className="object-cover w-45"
						/>

						<div className="flex flex-col w-full font-greatVibes text-2xl text-center">
							<h1>Ресторан</h1>
							<h1 className="mb-5">Алие</h1>

							<p className="mb-8">ул. Ленина, 96, Бахчисарай</p>

							<a
								href="https://yandex.com/maps/-/CLbzzJ2w"
								className="p-2 border border-white font-mono text-sm"
							>
								ОТКРЫТЬ КАРТУ →
							</a>
						</div>
					</div>
				</div>

				<h1 className="col-span-2 mb-5 text-center text-3xl font-ribeye">
					14.12.2025
				</h1>

				<h1 className="col-span-2 mb-5 text-center text-3xl font-ribeye">
					14:00
				</h1>

				<div className="col-span-2 h-[120px] w-full">
					<img
						src={FOOTER}
						alt="footer Logo"
						className="object-cover w-full h-[350px]"
					/>
				</div>
			</div>
		</>
	)
}

export default App
