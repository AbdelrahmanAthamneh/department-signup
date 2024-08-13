import classes from './Home.module.css'

export default function HomePage() {
  return (
    <main className="main-container">
      <div className={classes.welcome}>
        <h1>Welcome to department thing</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit illum dolorum voluptates perspiciatis eum incidunt hic enim corporis, similique quis voluptatibus. Placeat est ipsum minima assumenda quibusdam voluptatem omnis!</p>
      </div>
    </main>
  );
}
