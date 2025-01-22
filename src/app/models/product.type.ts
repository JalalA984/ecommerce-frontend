// private int id;
// private String name;
// private String desc;
// private String brand;
// private BigDecimal price;
// private String category;
// @JsonFormat(pattern = "yyyy-MM-dd") // Proper serialization for Date
// private Date releaseDate;
// private boolean available;
// private int quantity;


export type Product = {
    id: Number,
    name: String,
    desc: String,
    brand: String,
    price: Number,
    category: String,
    releaseDate: Date,
    available: Boolean,
    quantity: Number
}