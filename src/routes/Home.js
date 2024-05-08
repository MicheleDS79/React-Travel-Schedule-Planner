import Hero from '../components/Hero';
import NavBar from '../components/Navbar';
import Appointment from './Appointment';

function Home (){
    return (
        <>
        <NavBar/>
            <Hero
            cName="hero"
            heroImg="https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V29yayUyMFRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
            title="Your Work, Your Experience"
            text="Choose Your Work Destination"
            buttonText="Work Travel Plan"
            url="/"
            btnClass="show"
            />
        
        </>

    )
}

export default Home;