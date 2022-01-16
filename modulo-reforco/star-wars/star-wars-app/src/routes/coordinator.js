
export const goToListPage = (history) =>{
    history.push("/")
}

export const goToDetailPage = (history, id) =>{
    history.push(`/Detalhe/${id}`)
}
