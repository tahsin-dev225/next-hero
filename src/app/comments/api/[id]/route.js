
export async function PATCH(request,  {params}) {

    const paramsid = await params
    // console.log(paramsid.id)

    const body = await request.json();

    const index = comments.findIndex(c => c.id === parseInt(params.id))

    comments[index] = {
        id : index + 1,
        text : body.text
    }
    return Response.json({
        message : "Comment Update",
        comments
    })
}


export async function DELETE(request,  {params}){
    const newComment = comments.filter(c => c.id !== parseInt(params.id))
    return Response.json({
        message: "comment Deleted",
        newComment
    });
}

const comments = [
    {
        id: 1,
        text : "Comment 1"
    },
    {
        id: 2,
        text : "Comment 2"
    },
    {
        id: 3,
        text : "Comment 3"
    }
]