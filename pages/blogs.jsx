import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { auth } from "@/utils/firebase";
import Nav from "@/layout/navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// import { BlogsData } from "@/constants";
import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";

const BlogsPage = () => {
  const [image, setImage] = useState("");
  const [tempImageURL, setTempImageURL] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [BlogsData, setBlogsData] = useState([]);



  console.log(auth.currentUser);
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const temporaryImageURL = URL.createObjectURL(selectedImage);
      setTempImageURL(temporaryImageURL);
      setImage(selectedImage);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/createPost");
        if (res.status === 200) {
          setBlogsData(res.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const deletePost = async(id) =>{
    try{
      const res = await axios.delete(`/api/createPost?id=${id}`);
      if(res.status===200){
        toast("Post Deleted !")
      }
    }catch(e){
      toast("Error");
      console.log(e.message)
    }
      
  }

  const createPost = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "aryanbaba4199upload");

      const cloudinaryResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/dmoygdwk1/image/upload`,
        formData
      );
      const imageUrl = cloudinaryResponse.data.secure_url;
      console.log("URL", imageUrl);
      const res = await axios.post("/api/createPost", {
        imageUrl,
        title,
        description,
      });
      if (res.status === 200) {
        toast("Post Created Successfully");
        setTitle("");
        setTempImageURL("");
        setDescription("");
        setImage()
      }
    } catch (e) {
      toast("Something went wrong");
      console.log(e);
    }
  };

  return (
    <>
      <Nav />

      <Fragment>
        <Head>
          <title>Blogs</title>
        </Head>

        <Theme>
          <BackTo backTo={""} />
          <div className="p-[5%] pt-[2%] dark:bg-gray-700">
            {auth?.currentUser?.email == "amarsdanceacademy@gmail.com" && (
              <div>
                <div className="flex justify-center items-center">
                  <p className="text-2xl">Create Blog</p>
                </div>
                <div>
                  <div className="flex md:flex-row mt-8 flex-col justify-around items-center px-24">
                    <div>
                      <div className="text-lg flex justify-between gap-4 font-serif px-2">
                        Image:
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        {tempImageURL && (
                          <img
                            src={tempImageURL}
                            alt="Temporary Preview"
                            style={{ maxWidth: "200px" }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="group mt-4">
                      <input
                        type="text"
                        className="input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <label>Title</label>
                    </div>

                    <div className="group mt-8">
                      <input
                        type="text"
                        className="input"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <label>Description</label>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      onClick={createPost}
                      className="text-white bg-pink-600 mt-8 rounded-md hover:bg-purple-600 flex justify-center items-center px-4"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            )}
            <p className="font-bold text-2xl p-2 dark:text-white">Blogs</p>

            <div className="pb-5">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
              >
                <Masonry>
                  {BlogsData.map((blog) => (
                    <div
                      className="dark:bg-gray-900 rounded-md border border-gray-400 border-solid m-2"
                      key={blog.name}
                    >
                      <div key={blog.name}>
                        <div>
                          <Image
                            alt="img not found"
                            className="rounded-t-md"
                            height={250}
                            src={blog.imageUrl}
                            style={{ width: "100%" }}
                            width={400}
                          />
                          <div className="px-1 flex gap-2 justify-between py-2  border-t border-solid border-gray-600 dark:border-white">
                            <div className="blogLink">{blog.title}
                            <p className="text-center">{blog.description}</p>
                            </div>
                            
                            <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/256/7778/7778900.png"
                              className="w-8 hover:cursor-pointer"
                              alt="Delete"
                              onClick={(e)=>deletePost(blog._id)}
                            />
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
        </Theme>
        <ToastContainer />
      </Fragment>
    </>
  );
};

export default BlogsPage;
