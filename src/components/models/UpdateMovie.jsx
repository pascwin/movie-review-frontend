import React, { useState } from "react";
import { updateMovie } from "../../api/movie";
import { useNotification } from "../../hooks";
import { MovieForm } from "../form/MovieForm";
import { ModalContainer } from "./ModalContainer";

export default function UpdateMovie({
  visible,
  initialState,
  onSuccess,
  onClose,
}) {
  const [busy, setBusy] = useState(false);
  const { updateNotification } = useNotification();

  const handleSubmit = async (data) => {
    setBusy(true);
    const { error, movie, message, movieId } = await updateMovie(initialState.id, data);
    setBusy(false);
    if (error) return updateNotification("error", error);
    console.log(movie)

    updateNotification("success", message);
    onSuccess(movie, movieId);
    onClose();
  };

  return (
    <ModalContainer visible={visible}>
      <MovieForm
        initialState={initialState}
        btnTitle="Update"
        onSubmit={!busy ? handleSubmit : null}
        busy={busy}
      />
    </ModalContainer>
  );
}
