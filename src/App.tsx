import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { QuestionContextProvider } from './components/hooks/QuestionContext'
import QuestionPage from './components/pages/QuestionPage'
import AnswerPage from './components/pages/AnswerPage'

function App() {
  return (
    <>
      <QuestionContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/question' element={<QuestionPage />} />
            <Route path='/answer0' element={<AnswerPage index={0} />} />
            <Route path='/answer1' element={<AnswerPage index={1} />} />
          </Routes>
        </BrowserRouter>
      </QuestionContextProvider>
    </>
  )
}

export default App
