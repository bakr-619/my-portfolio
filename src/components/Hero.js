export default function Hero() {
    return (
      <section className="h-screen flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Hey, I'm [Your Name]</h1>
          <p className="text-xl">Full-Stack Developer & Designer</p>
        </div>
      </section>
    );
  }
  