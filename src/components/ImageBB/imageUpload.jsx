export const PostImage =async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const url =
      `https://api.imgbb.com/1/upload?key=66a8afb5774f60c0f148db65634f7f62`;
  const res = await fetch(url, {
      method: "POST",
      body: formData,
    })
    const data = await res.json();
    // console.log(data);
    const imageUrl = data.data.display_url
    return imageUrl; 
}