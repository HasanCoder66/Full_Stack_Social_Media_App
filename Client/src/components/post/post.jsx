import './post.css'
import { MdMoreVert } from "react-icons/md";
import { useState , useEffect } from 'react';
import axios from 'axios';
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'


function Post(post) {

    // console.log(post, "post ka console")
    const [like , setLike] = useState(post?.post?.likes.length)
    const [isLiked , setIsLiked] = useState(false)
    const [user , setUser] = useState({})
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    useEffect(()=>{
        const fetchUser = async () => {
         const res = await axios.get(`http://localhost:8800/api/user/?userId=${post?.post?.userId}`)
        //  console.log(res)

        setUser(res.data)
        }
        fetchUser()
        }, [post?.post?.userId])

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to="/profile/hasan" >
                    <img className='postProfileImg' src={user.profilePicture || `data:image/jpeg;base64,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`} alt="Profile Image" />
                    </Link>
                    <span className='postUsername'> {user.userName}</span>
                    <span className='postDate'> {format(post?.post?.createdAt)}</span>
                </div>
                <div className="postTopRight">
                <MdMoreVert className='postIcon'/>

                </div>
            </div>
            <div className="postCenter">
                <span className="postText"> {post?.post?.desc}  </span>
                <img className='postImg' src={post?.post?.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img  className='likeIcon' onClick={likeHandler} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEVekf////9Ui/9OiP/6+/9bj/9Xjf+uxP/z9v9FhP+mv//S3v/l7P+qwv/F1P/L2f91n/++z/+KrP9llf+duf98pP/d5v9smf9xnP+zyP+Xtf+Pr/+4zP/q8P+hvP+EqP9zbwg9AAAFLUlEQVRogc2biXKjMAyGjcEuVxMaEgKkpO//lmtIwmVbyHIy7D+d6cxu4q++ZEmWWeCuLjt8nU+XumSMlfXldP46ZB2hHeb28fyYFlJyLqUQgvVSvx//UKTH/GPsuLrXLJQPpC4hQ1bfq/j97KhqryFnNvATz3h4bavorey4qUMJYifJsG5wncew81b12EU8bDFTv82uLgm2y7POJ5fKm52fODzHNgl+2uo7zI7vwr3PY9/FHZ53kH0s3eZ5LV4eiezolniReyU3YMPZ2ZmkD/ckKTN39jmkrbG1RHh2ZMeF30zPxQvLkjOzc/aO8X5JMvNuM7Iz4p62SXDjpJvYhzej+0k/4Ni/4ZvJvcJfDLv5BFrBm2324TNoBdeGfc3OPoVW8PWCW7Fzq0sESChbgDAHQuYQOy4JaFlnXX4oty2CKGOAXRBMiige3/3b/q682NlniiGVLwfluv1ZfraxjxS0GFs4IL4eHs3siHR8TOy4RHxcRkb2jXR+TGxUA/JmYmc0L2XGRpmlJNPZEWbETCrHtnKUXSojjX2nOgv1yO42QqaHeLpm59Rj87W9+8WG2GX9N/IV+0bt9tSNIK5x37gt2RXVR5J/06ZB9nu0Rk82wiCam5lbSdx893/vnI1boYZWihka30qYz9gtrdviuog60G6HbCd2RDUryzMRbxiTaGR/0Ra5WIbY2KWmxJsXOypIaL5ywI74RSOK6MnOSUOuOZ4XB/OU5E82aaXND6THKndpZVhtzGmeZrquA+vUqQd1PLAryuZOtPDObb2G1cC+E4Z8ZsWf+nFMg6UDu6YcYWt0UIpB6Abqnt0RfHL+s0Yrz35opux1HZRAIyHKTrEdtuWoq9Ztk1IIrjxWRpluU0BrEuQ1y2/FLpyHXDBspv5kb1v5OyxwWB+vr52QaOhkEyJgHWHITQkMoyBrLTqWuZ9hIfpuoAPYPGNwFCUH8dfPMD3igr0YADMJ/MAacMzbdKFhXYoWiw7OQOOyYdB/h1oauIdzPWtjUQ45j/LOgG3AQm1wew9H/4tsaNBaixuDTnwLe/s2YlCTgLtXXBgUS5jZCdaypLC1Lhh0kljY6C0GZijFlUGhry87+INGHQ66vdlgtFB+tt+gO1Z+dL5Bu6bmm7DO8exvyGAXhP2NZ4NZL7W/3e0aml2BKVJl10B77sOOCzgnrew5dI759TuDHSJ1jkHnt+eYw/lZdX5DfovvWgPdUOW3QP6aL7sFz9AO9FO92UC/ej8VGhhfNmQ7Bv8ciEt89ze0vYe4BIjH/Nigt/aIx4A41It9ArM4fVwFxt9ebDjg6dPPYN7Bb8zBrN0z72A/4D1tKhh+Vxt5Jj92BS21Z57JbgI+1+9Xfs0eqfqxISd1zCta86lmtp7oMQpaalM+1foxM5uJ5vjSYamfUd9gkcqUR7bmz21sHlrEJ4GOwyx/blttFra35vcGtpsOnd28hb24L7HcE2kVCoSEmEHLeyLbcSfa77m+SKlXnb28H7PdC0o+F6UQQ9f6XpB+H+ou7T6Ufg/sKv0emH7/7SrD/Tf13t9Vpnt/ar2Do8z1DsQ6D1e2uc6DVt/iJlt9C7Gux0X2uh5aPZODoHomWh0XWnAdF61+DYuG69d2rdvbtV5x1zrNXetTd63LfX89MjMXof93ddi71p8He9bdB7u+N9j1nUWw5/uSYNd3NcGe74l67feOauj7bu/Heu33bq7X8F5Qbr4XlO9/LzgortLNd5LpJ95JPvV4Hyq196Hyw+9DR73rXew/8dtGl2O4UwQAAAAASUVORK5CYII=" alt="Like Pic" />
                    <img  className='likeIcon' onClick={likeHandler} src="data:image/png;base64,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" alt="Heart pic" />
                    <span className="postLikeCounter">
                        {like} people like it
                    </span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">
                        {user.comment} comments
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post