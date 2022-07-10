import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { setHeadersFetch } from "@core/functions/http/headers.function";
import { Branch } from "@core/models/branch.class";
import { Shop } from "@core/models/shop.class";
import { userSeller } from "@core/models/uSeller.class";
import { User } from "@core/models/user.class";
import { SideBarHomePageService } from "@shared/services/side-bar-home-page.service";

export function initSideBarData(data: {
    http: HttpClient,
    uri: string,
    userInfo: User,
    headers: HttpHeaders,
    sellerInfo: userSeller,
    token: string,
    shopInfo: Shop
    branchInfo: Branch,
    classService: SideBarHomePageService
}) 
{
    let macaco = data.http.get<Array<userSeller>>(data.uri+'seller/info/'+data.userInfo.id, { headers: data.headers }).subscribe(async (res): Promise<string> => {
        data.sellerInfo = res[0];
        let headersFetch: HeadersInit = setHeadersFetch(data.token);
  
        try {
          const shopBranchData: [Response, Response] = await Promise.all([
            fetch(data.uri + 'branch/shop/' + data.sellerInfo.id, { 'method': 'GET', 'headers': headersFetch }),
            fetch(data.uri + 'branch/' + data.sellerInfo.id, { 'method': 'GET', 'headers': headersFetch })
          ]);
  
          const rawShop: { shop: Shop } = await shopBranchData[0].json();
          const rawBranch: { branch: Branch } = await shopBranchData[1].json();
          data.shopInfo = rawShop.shop;
          data.branchInfo = rawBranch.branch;
  
          data.classService.sideBarClass.emit({
            message: 'all data',
            user: data.userInfo,
            seller: data.sellerInfo,
            shop: data.shopInfo,
            branch: data.branchInfo
          });
        } catch (e) {
          console.log(e);
        }

        return 'asd';
      }, (err: HttpErrorResponse) => {
        return 'asd';
      });
}