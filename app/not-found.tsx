import Link from "next/link";

export default function NotFound() {
  return (
    <section className="simple-hero">
      <p className="eyebrow">404</p>
      <h1>Lapa nav atrasta</h1>
      <p className="lead">
        Iespējams, adrese ir mainīta vai ievadīta nepareizi.
      </p>
      <Link className="button" href="/">
        Atgriezties sākumlapā <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
