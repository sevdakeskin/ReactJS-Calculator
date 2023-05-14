// virgüllü sayilarla islem yapabiliyor ama 3.9. yaziliyor 
//if(!calc.includes("."))  ise nokta koyulabilsin gibi bi mantik yazilmali düzelmesi için ama onun içinde cal kisminda sadece result olmali
import React, { useState } from "react";

function App() {
	const [calc, setCalc] = useState(""); //islemin girildigi kisim
	const [result, setResult] = useState("");

	const ops = ['/', '*', '-', '+', "."];


	const createDigits = () => {
		const digits = [];

		for (let i = 1; i < 10; i++) {
			digits.push(<button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>); // sayilar i olusturduk
		}

		return digits;
	}

	const updateCalc = (value) => { // bu value ops lar ve sayilar
		if (
			ops.includes(value) && calc === '' || // direk + ile baslamamasi için
			ops.includes(value) && ops.includes(calc.slice(-1)) //5++ olmamasi için
		) {

			return;
		}


		setCalc(calc + value);



		if (!ops.includes(value)) { //eger + falan yoksa
			setResult(eval(calc + value).toString());//girilen sayiyi direk sonucu olarak göster dedik
		}
	}

	const calculate = () => {
		setCalc(eval(calc).toString()); //girilenleri hesaplamasi içIn yazdik
		

	}

	const deleteLast = () => {
		if (calc == '') {

		}
		const value = calc.slice(0, -1); //tek tek silme


		setCalc(value);


	}



	return (
		<div className="App">
			<div className="calculator">
				<div className="display">
					<span>{calc ? '(' + calc + ')' : ''}</span>
					{calc || 0}
				</div>

				<div className="operators">
					<button onClick={() => updateCalc('/')}>/</button>
					<button onClick={() => updateCalc('*')}>x</button>
					<button onClick={() => updateCalc('-')}>-</button>
					<button onClick={() => updateCalc('+')}>+</button>

					<button onClick={deleteLast}>DEL</button>

				</div>

				<div className="digits">
					{createDigits()}
					<button onClick={() => updateCalc('0')}>0</button>
					<button onClick={() => updateCalc('.')}>.</button>
					<button onClick={calculate}>=</button>
				</div>
			</div>
		</div>
	);
}

export default App;
