import { Container } from 'react-bootstrap'
import ArrowNavigator from '../components/ArrowNavigator'
import CodeJs from '../components/CodeJs'

export default function InteractionAlert() {
	return (
		<Container className='text-light mt-5'>

		<ArrowNavigator />

		<h1>Взаимодействие: alert, prompt, confirm</h1>

		<p>Так как мы будем использовать браузер как демо-среду, нам нужно познакомиться с несколькими функциями его интерфейса, а именно: alert, prompt и confirm.</p>

		<h2>alert</h2>

		<p>С этой функцией мы уже знакомы. Она показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».</p>

		<p>Например:</p>

		<CodeJs js={` alert("Hello");`} />

		<p>Это небольшое окно с сообщением называется модальным окном. Понятие модальное означает, что пользователь не может взаимодействовать с интерфейсом остальной части страницы, нажимать на другие кнопки и т.д. до тех пор, пока взаимодействует с окном. В данном случае – пока не будет нажата кнопка «OK».</p>

		<h2>prompt</h2>

		<p>Функция prompt принимает два аргумента:</p>

		<CodeJs js={` result = prompt(title, [default]);`} />

		<p>Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.</p>
		<p className='mt-2'>title</p>
		<p style={{margin:'0'}}>Текст для отображения в окне.</p>
		<p className='mt-2'>default</p>
		<p style={{margin:'0'}}>Необязательный второй параметр, который устанавливает начальное значение в поле для текста в окне.
</p>

			
		</Container>
	)
};
