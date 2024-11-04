import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import updateCoffeeBg from "../../public/images/more/11.png";
import Swal from "sweetalert2";

const UpdateExistingCoffee = () => {
  const existingCoffee = useLoaderData();
  const handleUpdateExistingCoffee = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const supplier = e.target.supplier.value;
    const category = e.target.category.value;
    const chef = e.target.chef.value;
    const taste = e.target.taste.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;
    const UpdatedExistingCoffee = {
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      photo,
    };
    console.log(UpdatedExistingCoffee);
    fetch(
      `https://coffee-store-server-one-topaz.vercel.app/updateExistingCoffee/${existingCoffee._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpdatedExistingCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div>
        <div className="max-w-screen-xl mx-auto pt-10 text-[#374151] text-center lg:text-left font-rancho">
          <Link
            to="/"
            className="btn border-none hover:bg-[#E3B577]  bg-transparent"
          >
            <span className="text-xl font-normal">
              <FaArrowLeft />
            </span>
            <span className="text-2xl font-normal">Back to home</span>
          </Link>
        </div>
        <div className="relative ">
          <img
            className="h-[1350px] md:h-[900px] lg:h-[900px] w-full"
            src={updateCoffeeBg}
            alt=""
          />
          <div className="max-w-screen-xl mx-auto absolute inset-0 bg-[#F4F3F0] z-40 p-10 md:p-16 lg:p-20 my-12 rounded-lg">
            <div className="text-center">
              <h1 className="text-[#374151] font-rancho text-5xl font-normal pb-1 md:pb-2 lg:pb-4">
                Update Existing Coffee Details
              </h1>
              <p className="text-[#1b1a1ab2] font-raleway text-lg font-normal leading-8">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>
            <div>
              <div>
                <form onSubmit={handleUpdateExistingCoffee}>
                  <div className="flex flex-col md:flex-row lg:flex-row gap-9">
                    <div className="w-full md:w-2/4lg:w-2/4">
                      <div className="form-control py-2 font-raleway">
                        <label className="label">
                          <span className="label-text text-lg font-semibold">
                            Name
                          </span>
                        </label>
                        <input
                          defaultValue={existingCoffee.name}
                          name="name"
                          type="text"
                          placeholder="Enter coffee name"
                          className=" input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control py-2 font-raleway">
                        <label className="label">
                          <span className="label-text text-lg font-semibold">
                            Supplier
                          </span>
                        </label>
                        <input
                          defaultValue={existingCoffee.supplier}
                          name="supplier"
                          type="text"
                          placeholder="Enter coffee supplier"
                          className=" input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control py-2 font-raleway">
                        <label className="label">
                          <span className="label-text text-lg font-semibold">
                            Category
                          </span>
                        </label>
                        <input
                          defaultValue={existingCoffee.category}
                          name="category"
                          type="text"
                          placeholder="Enter coffee category"
                          className=" input input-bordered"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/4lg:w-2/4">
                      <div className="form-control py-2 font-raleway">
                        <label className="label">
                          <span className="label-text text-lg font-semibold">
                            Chef
                          </span>
                        </label>
                        <input
                          defaultValue={existingCoffee.chef}
                          name="chef"
                          type="text"
                          placeholder="Enter coffee chef"
                          className=" input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control py-2 font-raleway">
                        <label className="label">
                          <span className="label-text text-lg font-semibold">
                            Taste
                          </span>
                        </label>
                        <input
                          defaultValue={existingCoffee.taste}
                          name="taste"
                          type="text"
                          placeholder="Enter coffee taste"
                          className=" input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control py-2 font-raleway">
                        <label className="label">
                          <span className="label-text text-lg font-semibold">
                            Details
                          </span>
                        </label>
                        <input
                          defaultValue={existingCoffee.details}
                          name="details"
                          type="text"
                          placeholder="Enter coffee details"
                          className=" input input-bordered"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-control py-2 font-raleway">
                    <label className="label">
                      <span className="label-text text-lg font-semibold">
                        Photo
                      </span>
                    </label>
                    <input
                      defaultValue={existingCoffee.photo}
                      name="photo"
                      type="url"
                      placeholder="Enter photo URL"
                      className=" input input-bordered"
                      required
                    />
                  </div>
                  <div>
                    <input
                      className=" w-full btn py-[9px]  text-black text-2xl font-normal font-rancho hover:bg-[#E3B577] bg-[#E3B577]"
                      type="submit"
                      value="Update Coffee Details"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateExistingCoffee;
