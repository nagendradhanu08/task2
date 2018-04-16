import { HttpInterceptor } from "@angular/common/http/src/interceptor";
import { HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        const request = req.clone({
            setHeaders: {
                // 'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': 'http://192.168.0.62:15000',
                // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
            }
        });
        return next.handle(request)
        // .catch((error, caught) => {
        //     //intercept the respons error and displace it to the console
        //     console.log("Error Occurred");
        //     console.log(error);
        //     //return the error to the method that called it
        //     return Observable.throw(error);
        // }) as any;
    }
}
