export default function Home() {
  return (
    <div>
      Hello Monochrome <i className="fa-solid fa-house"></i>
      <img src="/images/banners/banner.png" alt=""></img>
      <div>
        <button className="button button-primary">Button Primary</button>
        <button className="button button-primary button-large">
          Button Primary Large
        </button>
        <a className="button button-primary">Button Primary</a>
        <a className="button button-primary button-large">
          Button Primary Large
        </a>
      </div>
    </div>
  );
}
