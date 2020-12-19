function eliminar(id){
	alert(id)
	swal({
	  title: "Estas seguro de liminar?",
	  text: "Una vez eliminado, no podrá recuperar este producto!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((OK) => {
	  if (OK) {
	  $.ajax({
	  		url:"/productos/delete/"+id,
	  		success: function(res) {
	  			console.log(res);
	  		},
	  	});
	    swal("Eliminado! Tu archivo ha sido eliminado con éxito!", {
	      icon: "success",
	    }).then((ok)=>{
	    	if(ok){
	    		location.href="/productos/";
	    		}
	    	});
	  } else {
	    swal("Tu archivo esta seguro!");
	  }
	});
}