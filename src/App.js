import './App.css';
import Header from './components/header';
import { Card } from './components/Card';
import Footer from './components/Footer';
import TitleSection from './components/Title';



function App() {

  const features = [
    {
      // src: ,
      title: "Chatbot",
      description:
        "Yea our chatbot is pretty cool",
    },
    {
      // src: ,
      title: "Data Visualization",
      description:
        "some graphs and forecasting stuff",
    },
    {
      // src: ,
      title: "News",
      description: "Follow the most recent stuff for your stocks",
    },
    {
      // src: ,
      title: "Add/Delete Stocks",
      description:
        "Choose which stocks to simulate and keep track off",
    },
  ];


  return (
    <div className="home">
      <Header />
      <TitleSection />
      <div className='features-list-container'>
        {
          features.map((feature, index) => {
            return (
              <Card key={index} title={feature.title} imgUrl={feature.src}>{<p>{feature.description}</p>}</Card>
            )
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
