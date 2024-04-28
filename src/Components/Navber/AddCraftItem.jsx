import Swal from "sweetalert2";

const AddCraftItem = () => {
  const handelAddCraftItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const craftName = form.craftName.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const photo = form.photo.value;
    const newCraft = {
      email,
      name,
      craftName,
      subcategoryName,
      shortDescription,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      photo,
    };
    console.log(newCraft);

    fetch("https://craft-henna-iota.vercel.app/craft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "user added succefully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="p-8">
        <h1 className="text-4xl text-center m-10 font-extrabold">
          Add Craft Items
        </h1>
        <form onSubmit={handelAddCraftItem}>
          {/* 1  */}
          <div className="flex  mb-5">
            <div className="form-control w-full mr-5">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-full "
                />
              </label>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <input
                  type="name"
                  name="name"
                  placeholder="your name"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/* 2  */}
          <div className="flex  mb-5">
            <div className="form-control w-full mr-5">
              <label className="label">
                <span className="label-text">Craft Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="craftName"
                  placeholder="craft name"
                  className="input input-bordered w-full "
                />
              </label>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Subcategory Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="subcategoryName"
                  placeholder="subcategory name"
                  className="input input-bordered w-full "
                />
              </label>
            </div>

{/* --------------------------------- */}

<select className="select select-success w-full max-w-xs">
  <option disabled hidden selected>Subcategory Name</option>
  <option>Landscape Painting</option>
  <option>Portrait Drawing</option>
  <option>Watercolour Painting</option>
  <option>Oil Painting</option>
  <option>Charcoal Sketching</option>
  <option>Cartoon Drawing</option>
</select>

{/* --------------------------------- */}


          </div>
          {/* 3 */}
          <div className="flex  mb-5">
            <div className="form-control w-full mr-5">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="shortDescription"
                  placeholder="short description"
                  className="input input-bordered w-full "
                />
              </label>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/* 4 suppleir*/}
          <div className="flex mb-5 ">
            <div className="form-control w-full mr-5">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="rating"
                  className="input input-bordered w-full "
                />
              </label>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="customization"
                  placeholder="customization"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            {/* --------------------------------- */}

<select className="select select-success w-full max-w-xs">
  <option disabled hidden selected>Customization</option>
  <option>Yes</option>
  <option>No</option>
</select>

{/* --------------------------------- */}
          </div>
          {/* 5*/}
          <div className="flex mb-5">
            <div className="form-control w-full mr-5">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="processingTime"
                  placeholder="processing time"
                  className="input input-bordered w-full "
                />
              </label>
            </div>

            <div className="form-control w-full ">
              <label className="label w-full">
                <span className="label-text">Stock Status</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="stockStatus"
                  placeholder="stock status"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

{/* --------------------------------- */}

<select className="select select-success w-full max-w-xs">
  <option disabled hidden selected>Stock Status</option>
  <option>Yes</option>
  <option>No</option>
</select>

{/* --------------------------------- */}

          </div>

          {/* 6*/}

          <div className="mb-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="photo"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>

          <input type="submit" value="add Items" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
