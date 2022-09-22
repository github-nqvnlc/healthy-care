import db from "../models/index";


//book
let createNewBookService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Book.create({
                name: data.name,
                description: data.description,
                price: data.price,
                discount: data.discount,
                quantity: data.quantity,
                vote: data.vote,
                image: data.image,
                authorId: data.authorId,
                categoryId: data.categoryId,
                publisherId: data.publisherId,
                typeId: data.typeId,
            });
            resolve({
                errCode: 0,
                errMessage: "oke",
            });
        } catch (e) {
            reject(e)
        }
    })
}
let getBookService = (bookId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (bookId === "ALL") {
                let book = await db.Book.findAll({
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                    // include: "categoryData"
                })
                resolve(book);

            }
            if (bookId && bookId !== "ALL") {
                let book = await db.Book.findOne({
                    where: { id: bookId }
                })
                resolve(book);

            }
            resolve({
                errCode: 2,
                errMessage: false
            })
        } catch (e) {
            reject(e)
        }
    })
}
let editBookService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: "Missing required parameters!",
                });
            }
            let book = await db.Book.findOne({
                where: { id: data.id },
                raw: false,
            });

            if (book) {
                book.name = data.name;
                book.description = data.description;
                book.price = data.price;
                book.discount = data.discount;
                book.quantity = data.quantity;
                book.vote = data.vote;
                book.image = data.image;
                book.authorId = data.authorId;
                book.categoryId = data.categoryId;
                book.publisherId = data.publisherId;
                book.typeId = data.typeId;
                await book.save();
                resolve({
                    errCode: 0,
                    errMessage: "Edit book successful!"
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Book not found!",
                });
            }
        } catch (e) {
            reject(e)
        }
    })
}
let deleteBookService = (id) => {
    return new Promise(async (resolve, reject) => {
        let book = await db.Book.findOne({
            where: { id: id },
        });
        if (!book) {
            resolve({
                errCode: 2,
                errMessage: "This book does not exist!"
            });
        }
        await db.Book.destroy({
            where: { id: id },
        })
        resolve({
            errCode: 0,
            errMessage: "Delete book successful!"
        });
    });
};

//Author
let createAuthorService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Author.create({
                name: data.name,
                description: data.description
            })
            resolve({
                errCode: 0,
                errMessage: "oke",
            });
        } catch (e) {
            reject(e)
        }
    })
}
let getAuthorService = (authorId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (authorId === "ALL") {
                let author = await db.Author.findAll()
                resolve(author)
            }
            if (authorId !== "ALL") {
                let author = await db.Author.findOne({
                    where: { id: authorId }
                })
                resolve(author)
            }
            resolve({
                errCode: 2,
                errMessage: "Get author faild!"
            })
        } catch (e) {
            reject(e)
        }
    })
}
let editAuthorService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: "Missing required parameters!",
                })
            }
            let author = await db.Author.findOne({
                where: { id: data.id },
                raw: false,
            });
            if (author) {
                author.name = data.name;
                author.description = data.description;
                await author.save();
                resolve({
                    errCode: 0,
                    errMessage: "Edit author successful!"
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Author not found!"
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let deleteAuthorService = (id) => {
    return new Promise(async (resolve, reject) => {
        let author = await db.Author.findOne({
            where: { id: id },
        });
        if (!author) {
            resolve({
                errCode: 2,
                errMessage: "This author does not exist!"
            })
        }
        await db.Author.destroy({
            where: { id: id }
        });
        resolve({
            errCode: 0,
            errMessage: "Delete author successful!"
        });
    })
}

//Category
let createCategoryService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Category.create({
                name: data.name,
                description: data.description
            })
            resolve({
                errCode: 0,
                errMessage: "oke",
            });
        } catch (e) {
            reject(e)
        }
    })
}
let getCategoryService = (categoryId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (categoryId === "ALL") {
                let category = await db.Category.findAll()
                resolve(category)
            }
            if (categoryId !== "ALL") {
                let category = await db.Category.findOne({
                    where: { id: categoryId }
                })
                resolve(category)
            }
            resolve({
                errCode: 2,
                errMessage: "Get category faild!"
            })
        } catch (e) {
            reject(e)
        }
    })
}
let editCategoryService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: "Missing required parameters!",
                })
            }
            let category = await db.Category.findOne({
                where: { id: data.id },
                raw: false,
            });
            if (category) {
                category.name = data.name;
                category.description = data.description;
                await category.save();
                resolve({
                    errCode: 0,
                    errMessage: "Edit category successful!"
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Category not found!"
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let deleteCategoryService = (id) => {
    return new Promise(async (resolve, reject) => {
        let category = await db.Category.findOne({
            where: { id: id },
        });
        if (!category) {
            resolve({
                errCode: 2,
                errMessage: "This category does not exist!"
            })
        }
        await db.Category.destroy({
            where: { id: id }
        });
        resolve({
            errCode: 0,
            errMessage: "Delete category successful!"
        });
    })
}

//Publisher
let createPublisherService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Publisher.create({
                name: data.name,
                description: data.description
            })
            resolve({
                errCode: 0,
                errMessage: "oke",
            });
        } catch (e) {
            reject(e)
        }
    })
}
let getPublisherService = (publisherId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (publisherId === "ALL") {
                let publisher = await db.Publisher.findAll()
                resolve(publisher)
            }
            if (publisherId !== "ALL") {
                let publisher = await db.Publisher.findOne({
                    where: { id: publisherId }
                })
                resolve(publisher)
            }
            resolve({
                errCode: 2,
                errMessage: "Get publisher faild!"
            })
        } catch (e) {
            reject(e)
        }
    })
}
let editPublisherService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: "Missing required parameters!",
                })
            }
            let publisher = await db.Publisher.findOne({
                where: { id: data.id },
                raw: false,
            });
            if (publisher) {
                publisher.name = data.name;
                publisher.description = data.description;
                await publisher.save();
                resolve({
                    errCode: 0,
                    errMessage: "Edit publisher successful!"
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Publisher not found!"
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let deletePublisherService = (id) => {
    return new Promise(async (resolve, reject) => {
        let publisher = await db.Publisher.findOne({
            where: { id: id },
        });
        if (!publisher) {
            resolve({
                errCode: 2,
                errMessage: "This publisher does not exist!"
            })
        }
        await db.Publisher.destroy({
            where: { id: id }
        });
        resolve({
            errCode: 0,
            errMessage: "Delete publisher successful!"
        });
    })
}

//Type
let createTypeService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Type.create({
                name: data.name,
                description: data.description
            })
            resolve({
                errCode: 0,
                errMessage: "oke",
            });
        } catch (e) {
            reject(e)
        }
    })
}
let getTypeService = (typeId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (typeId === "ALL") {
                let type = await db.Type.findAll()
                resolve(type)
            }
            if (typeId !== "ALL") {
                let type = await db.Type.findOne({
                    where: { id: typeId }
                })
                resolve(type)
            }
            resolve({
                errCode: 2,
                errMessage: "Get type faild!"
            })
        } catch (e) {
            reject(e)
        }
    })
}
let editTypeService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: "Missing required parameters!",
                })
            }
            let type = await db.Type.findOne({
                where: { id: data.id },
                raw: false,
            });
            if (type) {
                type.name = data.name;
                type.description = data.description;
                await type.save();
                resolve({
                    errCode: 0,
                    errMessage: "Edit type successful!"
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Type not found!"
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let deleteTypeService = (id) => {
    return new Promise(async (resolve, reject) => {
        let type = await db.Type.findOne({
            where: { id: id },
        });
        if (!type) {
            resolve({
                errCode: 2,
                errMessage: "This type does not exist!"
            })
        }
        await db.Type.destroy({
            where: { id: id }
        });
        resolve({
            errCode: 0,
            errMessage: "Delete type successful!"
        });
    })
}

module.exports = {
    //Book
    getBookService: getBookService,
    createNewBookService: createNewBookService,
    editBookService: editBookService,
    deleteBookService: deleteBookService,

    //Author
    getAuthorService: getAuthorService,
    createAuthorService: createAuthorService,
    editAuthorService: editAuthorService,
    deleteAuthorService: deleteAuthorService,

    //Category
    getCategoryService: getCategoryService,
    createCategoryService: createCategoryService,
    editCategoryService: editCategoryService,
    deleteCategoryService: deleteCategoryService,
    
    //Publisher
    getPublisherService: getPublisherService,
    createPublisherService: createPublisherService,
    editPublisherService: editPublisherService,
    deletePublisherService: deletePublisherService,

    //Type
    getTypeService: getTypeService,
    createTypeService: createTypeService,
    editTypeService: editTypeService,
    deleteTypeService: deleteTypeService,


}