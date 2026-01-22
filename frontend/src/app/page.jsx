import Carousel from "@/Components/Carousel/Carousel";
import FeaturedCategories from "@/Components/FeaturedCategories/FeaturedCategories";
import BestSellers from "@/Components/BestSellers/BestSellers";
import SpecialOffers from "@/Components/SpecialOffers/SpecialOffers";
import NewArrivals from "@/Components/NewArrivals/NewArrivals";
import CustomerReviews from "@/Components/CustomerReviews/CustomerReviews";
import Newsletter from "@/Components/Newsletter/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Carousel />
      
      {/* Featured Categories Section */}
      <FeaturedCategories />
      
      {/* Best Sellers Section */}
      <BestSellers />
      
      {/* Special Offers Section */}
      <SpecialOffers />
      
      {/* New Arrivals Section */}
      <NewArrivals />
      
      {/* Customer Reviews Section */}
      <CustomerReviews />
      
      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}
