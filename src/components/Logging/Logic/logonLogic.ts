const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
        data[key] = value.toString();
        // add the alert to the obligatories
    });

    console.log(data);
}

const handleInputChange = (event: React.FormEvent<HTMLFormElement>) => {

}

export { handleFormSubmit, handleInputChange };