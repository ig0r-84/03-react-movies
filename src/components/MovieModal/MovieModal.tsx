import { createPortal } from "react-dom";
import type { Movie } from "../../types/movie";
import css from "./MovieModal.module.css";

interface MovieModalProps {
  film: Movie;
  onClose: () => void;
}

export default function MovieModal({ film, onClose }: MovieModalProps) {
  return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>
        <button
          className={css.closeButton}
          aria-label="Close modal"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
          alt={film.title}
          className={css.image}
        />
        <div className={css.content}>
          <h2>{film.title}</h2>
          <p>{film.overview}</p>
          <p>
            <strong>Release Date:</strong> {film.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {film.vote_average}/10
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
