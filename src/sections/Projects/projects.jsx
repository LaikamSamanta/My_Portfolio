import "./projects.css";

function ProjectCard({ title, description, imgSrc }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm w-full max-w-2xl mx-auto">
      <figure>
        <img src={imgSrc} alt={title} className="object-cover max-h-64" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
}

export default function MyProjects() {
  return (
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectCard
            title="New album is released!"
            description="Click the button to listen on Spotiwhy app."
            imgSrc="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          />
          <ProjectCard
            title="Another album is out!"
            description="Tap the link and enjoy the tracks on Spotiwhy app."
            imgSrc="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          />
        </div>
      </div>
  );
}
