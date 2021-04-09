@extends('layouts.master')



@section('content')

<section>
    <div class="validOTPForm">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div class="card ">
                        <div class="card-header bg-dark text-white">
                            <h4 class="text-center">
                               Account verification 
                            </h4>
                        </div>
                        <div class="card-body">
                            <form action="">
                                @csrf
                                <div class="form-group">
                                    <label for="ph_no">Phone Nmber</label>
                                    <input type="text" class="form-control" name="ph_no" id="number" placeholder="(code) *********">
                                </div>
                                <div id="recaptcha-container"></div>
                                <a href="#" id="getcode" class="btn btn-dark btn-sm mt-1">Get Code</a>
                                <div class="form-group mt-4">
                                    <input type="text" class="form-control" name="getcode" id="codeToVerify" placeholder="Enter Code">
                                </div>
                                <a href="#" class="btn btn-dark btn-sm btn-block mt-2" id="verifPhNum">Verify Phone No</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
@push('scripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/8.0.1/firebase.js"               integrity="sha512-JUTpDiMNgGBIY8CHlYaMv5zyRjSXG0qjHlfJo28NSAPyPnSDD+SGkx4qmS9qLKnuRqkgGUzx5Qre9FivGDShhg==" crossorigin="anonymous">
</script>
<script src="{{ asset('assets/js/firebase.js') }}"></script>
@endpush